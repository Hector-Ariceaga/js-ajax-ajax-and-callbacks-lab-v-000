$('button').on('click', function(){
  const searchTerms = $('#searchTerms').val()

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(renderResults(data))
  })
})
$(document).ready(function (){})

function renderResults(data) {
  return data.items.map(result => renderResult(result))
}

function renderResult(result) {
  return `
  <div>
    <strong><p>${result.name}(Owner: ${result.owner.login})</p></strong>
    <p>${result.description}</p>
    <div><img src=${result.owner.avatar_url}></div>
    <a href=${result.html_url}>See Full Repo Here</a><br>
    <a href="#" data-repo=${result.name} data-owner=${result.owner.login} onclick="showCommits(this)">Show Commits</a>
  </div>
  `
}

function showCommits(el) {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repo}/commits`, data => {
    $('details').html(renderCommits(data))
  })
}

function showCommits(data) {
  return data.items.map(result => showCommit(result))
}

function showCommit(result) {
  console.log(result)
  return
  `
  <div>
    
  </div>
  `
}

