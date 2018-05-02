$(function(){
  $.get('./songs.json').then(function(response){
    let items = response
    items.forEach((i) =>{
      let $li = $(`
      <li>
        <a href="./song.html?id=${i.id}">
          <h3>${i.name}</h3>
          <p>
          <svg class="icon sq" aria-hidden="true">
            <use xlink:href="#icon-sq"></use>
          </svg>
          演唱者-专辑</p>
          <svg class="icon play" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
        </a>
      </li>
      `)
      $('#lastestMusic').append($li)
    })
    $('#lastestMusicLoading').remove()
  },function(){
  })
})
