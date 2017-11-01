let ref = firebase.database().ref('/');

ref.on('value', (snapshot) => {
    let profile = snapshot.val();
    document.querySelector('.name').innerText = profile.name;
    document.querySelector('.email').innerText = profile.email;
    document.querySelector('.bio').innerText = profile.bio;
});

let projects = firebase.database().ref('/projects').on('value', (snapshot) => {
    console.log(document.querySelector('.projects')[0]);
    snapshot.forEach((child) => {
        let project = child.val();
        let projectContainer = document.createElement('a');
        projectContainer.className = 'project';
        projectContainer.href = project.url;
        let img = document.createElement('img');
        img.src = project.img;
        let title = document.createElement('div');
        title.innerText = project.name;
        projectContainer.appendChild(img);
        projectContainer.appendChild(title);
        document.querySelector('.projects').appendChild(projectContainer);
    });
});