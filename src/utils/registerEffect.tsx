import gsap from "gsap";

gsap.registerEffect({
    name: "counter",
    extendTimeline: true,
    defaults: {
        end: 0,
        duration: 0.5,
        ease: "power1",
        increment: 1,
    },
    effect: (targets: HTMLElement[], config: { end: number; duration: number; ease: string; increment: number }) => {
        const tl = gsap.timeline();
        const num = targets[0].innerText.replace(/\,/g, '');
        targets[0].innerText = num;
        tl.to(targets, {
            duration: config.duration,
            innerText: config.end,
            //snap:{innerText:config.increment},
            modifiers: {
                innerText: function (innerText) {
                    return gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                }
            },
            ease: config.ease
        }, 0)

        return tl
    }
})