class LightSwitch {
    constructor() {
        this.element = document.getElementById("lightswitch");
        // this.icon = this.element.getElementsByTagName("i")[0];
        this.lightButton = document.getElementById("lightButton");
        this.darkButton = document.getElementById("darkButton");

        this.element.addEventListener('click', () => {
            this.bodySetDark();
        
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
                this.setMoon();

            } else {
                localStorage.setItem('darkMode', 'disabled');
                this.setSun();

            }
        });
    }

    bodySetDark() {
        document.documentElement.classList.toggle('dark');
    }

    setMoon() {
        // this.icon.classList.remove('fa-sun');
        // this.icon.classList.add('fa-moon');
        this.lightButton.hidden = true;
        this.darkButton.hidden = false;
        
    }

    setSun() {
        // this.icon.classList.remove('fa-moon');
        // this.icon.classList.add('fa-sun');
        this.lightButton.hidden = false;
        this.darkButton.hidden = true;
    }
}


let ls = new LightSwitch();

if (localStorage.getItem('darkMode') == 'enabled') {
    // ls.bodySetDark(); // may have been the source of trouble, causing unnecessary "flicker" and transition
    ls.setMoon();
} else {
    ls.setSun();
}