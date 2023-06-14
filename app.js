const app = Vue.createApp({    
    data() {
        return {
            selected: '',
            name: 'You',
            objective: 'are looking for a job',
            objectiveClass: 'text-bg-primary',
            text: 'I am searching for a job. Any advice will be appreciated.',
            hashtags: '#Oportunities #Job #Intership',
            texthashtagClass: 'text-bg-primary',
            vacancy: '',
            vacancies: [],
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'VueJS', 'Unity', 'NodeJS'],
            technologiesClass: 'text-bg-primary',
            borders: ['border-primary', 'border-secondary', 'border-success', 'border-danger', 'border-warning',
            'border-info', 'border-light', 'border-dark'],
            border: 'border-primary',
            subtle: false,
            widthClass: 'border-5',
            widthNumber: 5,
            vacanciesTextClass: 'text-bg-primary',
            vacanciesText: ['text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger',
                'text-bg-warning', 'text-bg-info', 'text-bg-light', 'text-bg-dark'],
            paddingVacancies: '1',
            paddingClass: 'p-1',            
            iconClass: ''
        }
    },    
    methods: {
        setTechnologies(e) {            
            const tech = e.target.value
            if(tech !== '') {
                this.technologies = this.technologies.filter(t => t !== tech)                
                this.setIcons(tech)
            }            
        },
        setVacancies(e) {
            let tag = e.target.value
            if(e.keyCode === 13 && tag.length > 2) {
                this.vacancy = ''
                this.vacancies.push(tag)    
                let span = document.createElement('span')
                span.classList.add("badge", "rounded-pill", "m-1", this.vacanciesTextClass, this.paddingClass)
                span.innerText = tag
                document.querySelector('#vacancies_list').appendChild(span)
            }
        },
        setIcons(icone) {
            let icon = document.createElement('i')
            icon.classList.add("ps-1", "pe-1", "fa-2x")
            switch(icone) {
                case 'HTML':
                    icon.classList.add("fa-brands", "fa-html5")                    
                break
                case 'CSS':
                    icon.classList.add("fa-brands", "fa-css3")
                break
                case 'JavaScript':
                    icon.classList.add("fa-brands", "fa-js")
                break
                case 'PHP':
                    icon.classList.add("fa-brands", "fa-php")
                break
                case 'Laravel':
                    icon.classList.add("fa-brands", "fa-laravel")
                break
                case 'VueJS':
                    icon.classList.add("fa-brands", "fa-vuejs")
                break
                case 'Unity':
                    icon.classList.add("fa-brands", "fa-unity")
                break
                case 'NodeJS':
                    icon.classList.add("fa-brands", "fa-node-js")
                break
            }
            document.querySelector('#icons').appendChild(icon)
        },
        setBorders(e) {
            if(e.target.value !== '') {
                const border = e.target.value
                this.border = border
                this.subtle = false
            }
        },
        setSubtle(e) {
            if(e.target.checked === true) {
                this.border = this.border + '-subtle'
            } 
            else {
                this.border = this.border.replace('-subtle', '')
            }  
        },
        setWidth(e) {
            const width = e.target.value
            this.widthNumber = width
            this.widthClass = "border-" + this.widthNumber
        },
        setPaddingVacancies(e) {
            this.paddingVacancies = e.target.value
            this.paddingClass = "p-" + this.paddingVacancies            
        }
    }
})

app.mount('#app')