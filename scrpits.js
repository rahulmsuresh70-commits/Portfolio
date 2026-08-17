/* =====================================================
   RAHUL MS PORTFOLIO
===================================================== */


/* =====================================================
   LOADER
===================================================== */

(function () {

    const loader =
        document.getElementById("loader");


    if (!loader) {
        return;
    }


    function hideLoader() {

        loader.style.pointerEvents =
            "none";

        loader.style.opacity =
            "0";

        loader.style.visibility =
            "hidden";

    }


    /*
        CSS handles the RAHUL MS
        letter-by-letter animation.

        JavaScript only removes
        the loading screen.
    */

    setTimeout(
        hideLoader,
        3500
    );

})();



/* =====================================================
   DOM READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           MOBILE MENU
        ================================================= */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const navMenu =
            document.getElementById(
                "navMenu"
            );


        if (
            menuButton &&
            navMenu
        ) {

            menuButton.addEventListener(
                "click",
                function () {

                    navMenu.classList.toggle(
                        "open"
                    );

                }
            );

        }



        /* =================================================
           CLOSE MOBILE MENU
        ================================================= */

        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (navMenu) {

                            navMenu.classList.remove(
                                "open"
                            );

                        }

                    }
                );

            }
        );



        /* =================================================
           SMOOTH SCROLL
        ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function (event) {

                            const id =
                                this.getAttribute(
                                    "href"
                                );


                            if (
                                !id ||
                                id === "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    id
                                );


                            if (!target) {

                                return;

                            }


                            event.preventDefault();


                            target.scrollIntoView({

                                behavior:
                                    "smooth",

                                block:
                                    "start"

                            });

                        }
                    );

                }
            );



        /* =================================================
           IMAGE ERROR HANDLING
        ================================================= */

        const images =
            document.querySelectorAll(
                "img"
            );


        images.forEach(
            function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        const parent =
                            image.parentElement;


                        if (parent) {

                            parent.classList.add(
                                "image-missing"
                            );

                        }


                        if (
                            !image.classList.contains(
                                "project-img"
                            )
                        ) {

                            image.style.display =
                                "none";

                        }

                    }
                );

            }
        );



        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const revealObserver =
                new IntersectionObserver(

                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "visible"
                                    );

                                    revealObserver.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },

                    {
                        threshold: 0.08
                    }

                );


            revealElements.forEach(
                function (element) {

                    revealObserver.observe(
                        element
                    );

                }
            );


        } else {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }



        /* =================================================
           ACTIVE NAVIGATION
        ================================================= */

        const sections =
            document.querySelectorAll(
                "main section[id]"
            );


        const navigationLinks =
            document.querySelectorAll(
                ".nav-link"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const sectionObserver =
                new IntersectionObserver(

                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    !entry.isIntersecting
                                ) {

                                    return;

                                }


                                navigationLinks.forEach(
                                    function (link) {

                                        const href =
                                            link.getAttribute(
                                                "href"
                                            );


                                        if (
                                            href ===
                                            "#" +
                                            entry.target.id
                                        ) {

                                            link.classList.add(
                                                "active"
                                            );

                                        } else {

                                            link.classList.remove(
                                                "active"
                                            );

                                        }

                                    }
                                );

                            }
                        );

                    },

                    {
                        rootMargin:
                            "-35% 0px -55% 0px",

                        threshold: 0
                    }

                );


            sections.forEach(
                function (section) {

                    sectionObserver.observe(
                        section
                    );

                }
            );

        }

    }
);