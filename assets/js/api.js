fetch("./assets/json/chinesetrending.json").then((data)=>{
    return data.json()
}).then((dataChinese)=>{
    let tableData=""
    dataChinese.map((values)=>{
        $('#chineseData').append(`
        <tr>
            <td>${values.Keyword}</td>
            <td>${values.Volume}</td>
        </tr>
        `)
    })
    $(".tablemanager").tablemanager({
        firstSort: [[3,0],[2,0],[1,'asc']],
        dateFormat: [[4,"dd-mm-yyyy"]],
        debug: true,
        vocabulary: {
            voc_show_rows: 'Show rows'
        },
        pagination: false,
        showrows: [5,10],
        disableFilterBy: [1]
    })
})

fetch("./assets/json/englishtrending.json").then((dataE)=>{
    console.log(dataE.json)
    return dataE.json()
}).then((dataEnglish)=>{
    let tableDataEnglish=""
    dataEnglish.map((Evalues)=>{
        $('#englishData').append(`
        <tr>
            <td>${Evalues.Keyword}</td>
            <td>${Evalues.volume}</td>
        </tr>
        `)
    })
    $(".display").tablemanager({
        firstSort: [[3,0],[2,0],[2,'asc']],
        dateFormat: [[4,"dd-mm-yyyy"]],
        debug: true,
        vocabulary: {
            voc_show_rows: 'Show rows'
        },
        pagination: false,
        showrows: [5,10],
        disableFilterBy: [1]
    })
})

fetch("./assets/json/japantrending.json").then((dataJ)=>{
    return dataJ.json()
}).then((dataJapan)=>{
    let tableDataJapan=""
    dataJapan.map((Jvalues)=>{
        $('#japanData').append(`
        <tr>
            <td>${Jvalues.Keyword}</td>
            <td>${Jvalues.Volume}</td>
        </tr>
        `)
    })
    $(".japan").tablemanager({
        firstSort: [[3,0],[2,0],[2,'asc']],
        dateFormat: [[4,"dd-mm-yyyy"]],
        debug: true,
        vocabulary: {
            voc_show_rows: 'Show rows'
        },
        pagination: false,
        showrows: [5,10],
        disableFilterBy: [1]
    })
})

fetch("./assets/json/englishlifestyle.json").then((dataL)=>{
    return dataL.json()
}).then((dataELstyle)=>{
    let tableDataELsty=""
    dataELstyle.map((ELvalues)=>{
        $('#lifeEnglish').append(`
        <tr>
            <td>${ELvalues.Keyword}</td>
            <td>${ELvalues.volume}</td>
        </tr>
        `)
    })
    $(".lifeEnglish").tablemanager({
        firstSort: [[3,0],[2,0],[2,'asc']],
        dateFormat: [[4,"dd-mm-yyyy"]],
        debug: true,
        vocabulary: {
            voc_show_rows: 'Show rows'
        },
        pagination: false,
        showrows: [5,10],
        disableFilterBy: [1]
    })
})

fetch("./assets/json/chineselife.json").then((dataC)=>{
    return dataC.json()
}).then((dataCLstyle)=>{
    let tableDataCLsty=""
    dataCLstyle.map((CLvalues)=>{
        $('#LifeChinese').append(`
        <tr>
            <td>${CLvalues.Keyword}</td>
            <td>${CLvalues.Volume}</td>
        </tr>
        `)
    })
    $(".LifeChinese").tablemanager({
        firstSort: [[3,0],[2,0],[2,'asc']],
        dateFormat: [[4,"dd-mm-yyyy"]],
        debug: true,
        vocabulary: {
            voc_show_rows: 'Show rows'
        },
        pagination: false,
        showrows: [5,10],
        disableFilterBy: [1]
    })
})