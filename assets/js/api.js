fetch("./assets/json/chinesetrending.json").then((data)=>{
    return data.json()
}).then((dataChinese)=>{
    let tableData=""
    dataChinese.map((values)=>{
        $('#chineseData').append(`
        <tr>
            <td>${values.Keyword}</td>
            <td>${values.volume}</td>
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
        pagination: true,
        showrows: [5,10,20,50,100],
        disableFilterBy: [1]
    })
})