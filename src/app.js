import { User } from './model/user'

export default async () => {
    const { createParagraph } = await import('./helper'); 
    const content = document.getElementById('main');

    const button = document.createElement('button');
    button.textContent = 'Button'
    button.onclick = async () => {
        const { NewUser } = await import('./model/new-user');
        const { getRandom } = await import('./helper');

        const names = ['Kasia', 'Asia', 'Gosia', 'Franek', 'Janek'];
        const surnames = ['Nowak', 'Kowalski'];

        const newUser = new NewUser(getRandom(names), getRandom(surnames));
        content.appendChild(createParagraph(newUser))
    }
    content.appendChild(button);

    const user = new User('Adam', 'Kowalski');
    content.appendChild(createParagraph(user));

    user.setName('Andrzej');
    content.appendChild(createParagraph(user));

    setTimeout(async () => {
        const { NewUser } = await import('./model/new-user');
        const newUser = new NewUser('Anna', 'Nowak');

        content.appendChild(createParagraph(newUser));
    }, 5000);
}