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
  audio.src = '//m10.music.126.net/20180430103820/b8beea1f7ecf191602a211667395556b/ymusic/5d63/5150/0851/5f226aac018cafc2cb248f7d28fbd5b4.mp3'
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