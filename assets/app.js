const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

if (menu && nav) {
    menu.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', open);
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
}

const form = document.querySelector('#form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const company = document.querySelector('#company').value.trim();
        const service = document.querySelector('#service').value;
        const description = document.querySelector('#description').value.trim();

        const subject = encodeURIComponent(
            'AegisSec Assessment Request — ' + service
        );

        const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Service: ${service}

Project description:
${description}

Authorization:
I confirm that I am authorized to request security testing for the described target.

No passwords or secrets are included.`
        );

        location.href =
            `mailto:security@example.com?subject=${subject}&body=${body}`;
    });
}
