function eliminar(id) {
    axios.delete("/arq/" + id)
        .then(response => window.location.assign("/"))
        .catch(erro => console.log(erro))
}

/* Throw PUT request */
function atualizar(id) {
    let newObject = {
        prov: document.getElementById("prov").value,
        tit: document.getElementById("tit").value,
        file: {
            "-t": document.getElementById("file-t").value,
            "#text": document.getElementById("file#text").value
        },
        duracao: document.getElementById("duracao").value,
        id: id
    }

    if (document.getElementById("local") != null) {
        let local = document.getElementById("local").value
        newObject["local"] = local
    }

    if (document.getElementById("inst") != null) {
        let inst = document.getElementById("inst").value
        newObject["inst"] = inst
    }

    let auxObject = {}
    if (document.getElementById("musico#text") != null) {
        let musicoText = document.getElementById("musico#text").value
        let musicoFrom = document.getElementById("musicofrom").value

        auxObject["#text"] = musicoText
        auxObject["from"] = musicoFrom
        newObject["musico"] = auxObject

    } else if (document.getElementById("musico#text0") != null) {
        let musicoText0 = document.getElementById("musico#text0").value
        let musicoText1 = document.getElementById("musico#text1").value
        let musicoProf = document.getElementById("musicoprof").value

        auxObject["#text"] = [musicoText0, musicoText1]
        auxObject["prof"] = musicoProf
        newObject["musico"] = auxObject

    } else if (document.getElementById("musico") != null) {
        let musico = document.getElementById("musico").value
        newObject["musico"] = musico
    }

    auxObject = {}
    if (document.getElementById("obs#text") != null) {
        let obsText = document.getElementById("obs#text").value
        auxObject["#text"] = obsText

        let obsfileType0 = document.getElementById("obsfile-t0").value
        let obsfileText0 = document.getElementById("obsfile#text0").value
        let obsfileType1 = document.getElementById("obsfile-t1").value
        let obsfileText1 = document.getElementById("obsfile#text1").value
        let file = [
            {
                "-t": obsfileType0,
                "#text": obsfileText0
            },
            {
                "-t": obsfileType1,
                "#text": obsfileText1
            }
        ]
        auxObject["file"] = file

        let intxt = document.getElementById("obsintxt").value
        auxObject["intxt"] = intxt

        newObject["obs"] = auxObject

    } else if (document.getElementById("obs#text0") != null) {
        let obsText0 = document.getElementById("obs#text0")
        if (document.getElementById("obs#text1") != null) {
            let obsText1 = document.getElementById("obs#text1")
            auxObject["#text"] = [obsText0, obsText1]
        } else {
            auxObject["#text"] = obsText0
        }

        let obsfileType0 = document.getElementById("obsfile-t0").value
        let obsfileText0 = document.getElementById("obsfile#text0").value
        let obsfileType1 = document.getElementById("obsfile-t1").value
        let obsfileText1 = document.getElementById("obsfile#text1").value
        let file = [
            {
                "-t": obsfileType0,
                "#text": obsfileText0
            },
            {
                "-t": obsfileType1,
                "#text": obsfileText1
            }
        ]
        auxObject["file"] = file

        let intxt = document.getElementById("obsintxt").value
        auxObject["intxt"] = intxt

        newObject["obs"] = auxObject

    } else if (document.getElementById("obs") != null) {
        let obs = document.getElementById("obs").value
        newObject["obs"] = obs
    }
    
    axios.put("/arq/" + id, newObject)
        .then(response => window.location.assign("/arq/" + id))
        .catch(erro => console.log(erro))
}