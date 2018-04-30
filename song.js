$(function(){ 
  $.get('/lyric.json').then(function(object){
    let {lyric} = object
    let array = lyric.split('\n')
    let regex = /^\[(.+)\](.*)$/
    array = array.map(function(string,index){
      let matches = string.match(regex)
      if(matches){
        return { time: matches[1],words: matches[2] }
      }
    })
    let $lyric = $('.lyric')
    array.map(function(object){
      if(!object){
        return
      }
      let $p = $('<p/>')
      $p.attr('data-time',object.time).text(object.words)
      $p.appendTo($lyric.children('.lines'))
    })
  })
  // 进入页面开始播放音乐
  let audio = document.createElement('audio')
  audio.src = 'http://m10.music.126.net/20180430102933/ff535ecd2b886cc0196b3d76e85a2911/ymusic/7cfe/06af/2e02/2717d9e8ca5a258135c37e23f68cd9c9.mp3'
  audio.oncanplay = function(){
    audio.play()
    $('.disc-container').addClass('playing')
  }
})