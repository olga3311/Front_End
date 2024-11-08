// fetch("url", {
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': 'Basic ' + btoa(globalUsername + ":" + globalPassword),
//     },
//     method: "POST",
//     body: moveBody
//   })
//   .then(response => console.log(response.status) || response) // output the status and return response
//   .then(response => response.text()) // send response body to next then chain
//   .then(body => console.log(body)) // you can use response body here


fetch("https://api.github.com/users/IrinBorin/repos ")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        doSomethingWithRepos(data);
    })



function doSomethingWithRepos(repos) {
    console.log(repos);
    console.log(repos[0]);

    const elementsFromRepos = repos.map(
        (OneElementOfArray) => {
            const liElement = document.createElement('li');
            liElement.textContent = OneElementOfArray.name;
            return liElement;
        }
    )

    console.log(elementsFromRepos);

    const liParentElement = document.createElement('ul');
    liParentElement.append(...elementsFromRepos);
    document.body.append(liParentElement);
}


