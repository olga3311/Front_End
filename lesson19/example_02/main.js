// создать html и в нем кнопку getInfo
const loginElement = document.createElement('input');
loginElement.type = 'text';
loginElement.placeholder = 'Enter your name';
document.body.append(loginElement);

const searchByNameBtn = document.createElement('button');
searchByNameBtn.textContent = 'search by login name';
document.body.append(searchByNameBtn);

searchByNameBtn.addEventListener('click', () => {
    getUserInfo(loginElement.value);
})


const getUserInfo = async (userLogin) => {
    const response = await fetch(`https://api.github.com/users/${userLogin}`);
    const allDataAboutUser = await response.json();
    //console.log(allDataAboutUser);
    // console.log(allDataAboutUser.avatar_url, allDataAboutUser.name);

    const responseRepos = await fetch(allDataAboutUser.repos_url);
    const allUserRepos = await responseRepos.json();
    //console.log(allUserRepos);

    renderUserInfo(allDataAboutUser.avatar_url, allDataAboutUser.name, allUserRepos);
}
//getUserInfo('facebook');

//getUserInfo('Olga3311');



function renderUserInfo(imgUrl, name, repos) {

    //формируем  новый элемент  с именем владельца репозитория

    const userNameElement = document.createElement('p');
    userNameElement.textContent = name;

    const userAvatar = document.createElement('img');
    userAvatar.src = imgUrl;

    //формируем ул с репозиториями пользователя
    const listOfRepos = document.createElement('ul');
    const listElementsOfReposNAmes = repos.map(
        (repoObj) => {
            const repoNameLiElement = document.createElement('li');
            repoNameLiElement.textContent = repoObj.name;
            return repoNameLiElement;
        }
    )
    listOfRepos.append(...listElementsOfReposNAmes);
    document.body.innerHTML = '';

    // все элементы аппендим внутрь body
    //document.body.innerHTML = '';
    document.body.append(userNameElement, userAvatar, listOfRepos);
}


