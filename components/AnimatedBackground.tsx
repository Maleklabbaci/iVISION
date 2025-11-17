import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[];
        
        const mouse = {
            x: undefined as number | undefined,
            y: undefined as number | undefined,
        };

        const options = {
            particleColor: "rgba(141, 150, 160, 0.5)",
            particleAmount: 50,
            defaultRadius: 2,
            variantRadius: 2,
            defaultSpeed: 0.5,
            variantSpeed: 0.5,
            linkRadius: 150,
            mouseRadius: 100, // Radius around mouse for interaction
        };

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        class Particle {
            x: number;
            y: number;
            baseRadius: number;
            radius: number;
            speed: number;
            directionAngle: number;
            dx: number;
            dy: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.baseRadius = options.defaultRadius + Math.random() * options.variantRadius;
                this.radius = this.baseRadius;
                this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
                this.directionAngle = Math.floor(Math.random() * 360);
                this.dx = Math.cos(this.directionAngle) * this.speed;
                this.dy = Math.sin(this.directionAngle) * this.speed;
            }

            update() {
                this.border();
                this.x += this.dx;
                this.y += this.dy;
            }

            border() {
                if (this.x >= w || this.x <= 0) this.dx *= -1;
                if (this.y >= h || this.y <= 0) this.dy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = options.particleColor;
                ctx.fill();
            }
        }

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < options.particleAmount; i++) {
                particles.push(new Particle());
            }
        };

        const checkDistance = (x1: number, y1: number, x2: number, y2: number) => {
             return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }

        const linkParticles = () => {
             for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const distance = checkDistance(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    const opacity = 1 - distance / options.linkRadius;
                    if (opacity > 0) {
                        ctx.lineWidth = 0.5;
                        
                        let distanceToMouse = Infinity;
                        if(mouse.x !== undefined && mouse.y !== undefined) {
                            distanceToMouse = checkDistance(particles[i].x, particles[i].y, mouse.x, mouse.y);
                        }
                        
                        const alpha = (distanceToMouse < options.mouseRadius) ? opacity * 0.8 : opacity * 0.2;
                        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            }
        }
        
        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 0.5;
            const gridSize = 40;
            for (let x = 0; x < w; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            for (let y = 0; y < h; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        };

        const loop = () => {
            ctx.clearRect(0, 0, w, h);
            drawGrid();
            particles.forEach(p => {
                p.update();
                if (mouse.x !== undefined && mouse.y !== undefined) {
                    const distanceToMouse = checkDistance(p.x, p.y, mouse.x, mouse.y);
                    if(distanceToMouse < options.mouseRadius) {
                        p.radius = p.baseRadius + 2;
                    } else {
                        p.radius = p.baseRadius;
                    }
                }
                p.draw();
            });
            linkParticles();
            animationFrameId = window.requestAnimationFrame(loop);
        };
        
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        }
        
        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            createParticles();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        
        createParticles();
        loop();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default AnimatedBackground;
