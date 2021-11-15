const form = document.getElementById("form");

const createElt = (name, email) => {
    const elt = document.createElement("li");
    elt.setAttribute("name", name);
    elt.setAttribute("email", email);
    elt.innerHTML = "L'adresse de " + name + " est " + email;
    elt.addEventListener("click", () => {
        // Ici tu dois envoyer une requete de type POST a
        // http://localhost:3000/delete avec en body un objet user avec le nom et l'email
        // en retour, dans le .then, fais appel a la fonction loadTable pour refresh le tableau
    });
    return elt;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const user = {
        name: name,
        email: email,
    };
    fetch("http://localhost:3000/user", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .then((param) => {
            const list = document.getElementById("list");
            list.innerHTML = "";
            param.forEach((user) => {
                const elt = createElt(user.name, user.email);
                list.appendChild(elt);
            });
        });
});

const loadTable = () => {
    fetch("http://localhost:3000/")
        .then((response) => {
            return response.json();
        })
        .then((param) => {
            const list = document.getElementById("list");
            list.innerHTML = "";
            param.forEach((user) => {
                const elt = createElt(user.name, user.email);
                list.appendChild(elt);
            });
        });
};


loadTable();