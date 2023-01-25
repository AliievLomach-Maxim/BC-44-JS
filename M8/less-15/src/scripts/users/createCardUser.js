export const usersContainer = document.querySelector('.users')

export const createCardUser = (name, email, phone, website) => `
<div class='card'>
    <h1>${name}</h1>
    <h3>${email}</h3>
    <div class='content-card>
        <p class='phone'>${phone}</p>
        <a href="https://${website}" class='website'>${website}</a>
    </div>
</div>
`
