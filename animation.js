const tl = gsap.timeline({defaults: { duration: 0.75, ease: "power1.out" }})

tl.fromTo('.board', {opacity: 0, scale:0 }, {opacity: 1, scale:1, duration: 2.5, ease: "elastic.out(0.5, 0.3)"})

tl.fromTo('.rect_1', {opacity: 0, scale:0 }, {opacity: 1, scale:1, duration: 1}, '<')

tl.fromTo('.cube_1', { rotation: "-70deg"}, { duration: 1, rotation: "-68deg", yoyo: true, repeat: -1});
tl.fromTo('.circle_1', { y:0, scale: 0.9 }, { duration: 3, y: 5, scale: 1, yoyo: true, repeat: -1}, '<');
tl.fromTo('.polygon_1', { y:0, scale: 0.9 }, { duration: 2, y: 5, scale: 1, yoyo: true, repeat: -1}, '<');
tl.fromTo('.img_1', { y:0, scale: 0.9 }, { duration: 5, y: 5, scale: 1, yoyo: true, repeat: -1}, '<');

tl.fromTo('.show', { y: -100 }, {y: 0, duration: 2});
