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
  audio.src = '//p7zhcxqif.bkt.clouddn.com/%E7%83%9F%E7%81%AB%E9%87%8C%E7%9A%84%E5%B0%98%E5%9F%83.mp3'
  audio.oncanplay = function(){
    audio.play()
    $('.disc-container').addClass('playing')
  }
  // 暂停播放功能
  $('.icon-pause').on('click',function(){
    audio.pause()
    $('.disc-container').removeClass('playing')
  })
  $('.icon-play').on('click', function () {
    audio.play()
    $('.disc-container').addClass('playing')
  })
})