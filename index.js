function renderResults(data) {
  return data.items.map(result => renderResult(result))
}

function renderResult(result) {
  return `
  <div>
    <strong><p>${result.name}(Owner: ${result.owner.login})</p></strong>
    <img src=${result.owner.avatar_url}>
    <p>${result.description}</p>
    <a href=${result.html_url}>See Full Repo Here</a><br>
    <a href="#" data-repo=${result.name} data-owner=${result.owner.login} onclick="showCommits(this)">Show Commits</a>
  </div>
  `
}

$('button').on('click', function(){
  const searchTerms = $('#searchTerms').val()

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(renderResults(data))
  })
})
$(document).ready(function (){})


//     {
//       for (let i = 0; i < data.items.length; i++) {
//         $('#results')
//         .append(
//           `<div><strong>${data.items[i].name}(${data.items[i].owner.login})</strong>
//           <div><img src=${data.items[i].owner.avatar_url}></div>
//           <p>${data.items[i].description}</p>
//           <a href=${data.items[i].html_url}>See Full Repo Here</a><br>
//           <a href="#" data-repo=${data.items[i].name} data-owner=${data.items[i].owner.login} onclick="showCommits(this)">Show Commits</a></div>
//           <br><br>`)
//       }
//     }, "json")
//   })
// })
//
// let showCommits(el) {
//     $.get({
//       url : `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.reoi}/commits`,
//       type : 'GET'
//     }).done(function(data) {
//       console.log(data)
//     })
//   })
// }
