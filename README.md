# [Netflix Expire Counter](https://chrome.google.com/webstore/detail/netflix-expire-counter/hnahcihappflgfhjfhoogjjfklkemeed)
> 곧 만료되는 Netflix 작품들을 확인하는 Chrome Extension

## 왜 만들었나?

최근 [Queen's Gambit](https://www.netflix.com/kr/title/80234304)을 감명깊게 보고 검색을 하다가 [넷플릭스 마이너 갤러리](https://gall.dcinside.com/mgallery/board/view/?id=netflix&no=17265&_rk=EYz&exception_mode=recommend&page=1)에 방문하게 되었다. 댓글을 읽던 중 만료예정 작품 리스트를 간편히 확인하는 것에 대한 니즈가 있다는 것을 알게되었다.

## 어떻게 작동하는가?

[Rapid API](https://rapidapi.com/unogs/api/unogsng?endpoint=apiendpoint_d46d08b2-62d4-47c0-904d-98166dbeb287) 에서 제공하는 국가별 만료 작품 확인 API를 활용하였다. quota가 하루에 100정도라 자체적인 API를 별도로 구성하는 것에 대해 고민했다. 좋은 아이디어가 떠올랐는데 [GitHub Actions의 schedule을 활용해 매일 자정 해당 API의 response되는 json을 값을 별도 파일로 만들어 GitHub Pages로 배포](https://github.com/dididy/netflix-expire-list-extension/blob/master/.github/workflows/get-data.yml)하는 것이었다. 이렇게 하면 매일 목록을 갱신할 수 있는 동시에 무료로 모든 트래픽을 감당할 수 있다.

React와 Webpack 기반 [Chrome Extension 보일러플레이트](https://medium.com/@SunnyGolovine/build-a-chrome-extension-using-reactjs-and-webpack-part-1-976a414b85d0)를 참고해서 환경을 구성 했다. GitHub Actions의 schedule과 쉘명령어(curl, >>), github-pages-deploy-action을 활용해 내가 의도한대로 잘 작동한다는 것을 확인했다. React를 사용해 GitHub Pages에 배포된 json 파일을 fetch로 읽어서 만료예정 작품 목록과 각 작품 만료까지 남은 일수를 표시하는 페이지를 완성시켰다.

## 앞으로 할 일

- [Issue](https://github.com/dididy/netflix-expire-list-extension/issues)