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

        const options = {
            particleColor: "rgba(141, 150, 160, 0.5)",
            lineColor: "rgba(56, 189, 248, 0.1)",
            particleAmount: 50,
            defaultRadius: 2,
            variantRadius: 2,
            defaultSpeed: 0.5,
            variantSpeed: 0.5,
            linkRadius: 150,
        };

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        class Particle {
            x: number;
            y: number;
            radius: number;
            speed: number;
            directionAngle: number;
            dx: number;
            dy: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.radius = options.defaultRadius + Math.random() * options.variantRadius;
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
                        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.2})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            }
        }

        const setup = () => {
            createParticles();
            loop();
        };

        const loop = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            linkParticles();
            animationFrameId = window.requestAnimationFrame(loop);
        };
        
        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            createParticles();
        };

        window.addEventListener('resize', handleResize);
        setup();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default AnimatedBackground;