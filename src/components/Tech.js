import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div className="tech_container">
        <div className='top-row'>
          <div className="hexagon hex1"><span><img id="javascript" src="data:image/png;base64,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" /></span></div>
          <div className="hexagon hex2"><span><img id="html" src="http://upload.wikimedia.org/wikipedia/commons/0/00/HTML5_logo_black.svg" /></span></div>
          <div className="hexagon hex3"><span><img id="css" src="http://ohdoylerules.com/content/images/css3.svg" /></span></div>
          <div className="hexagon hex4"><span><img id="bower" src="https://bower.io/img/bower-logo.png" /></span></div>
          <div className="hexagon hex5"><span><img id="node" src="http://endeavor.in/sites/default/files/nodejs-logo_0.png" /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex2"><span><img id="python" src="https://ee5817f8e2e9a2e34042-3365e7f0719651e5b8d0979bce83c558.ssl.cf5.rackcdn.com/python.png" /></span></div>
          <div className="hexagon hex3"><span><img id="angular" src="http://tekclasses.com/wp-content/uploads/2016/02/AngularJS-Shield-large-282x300.png" /></span></div>
          <div className="hexagon hex4"><span><img id="git" src="https://git-for-windows.github.io/img/git_logo.png" /></span></div>
          <div className="hexagon hex5"><span><img id="github" src="https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2107379463%2Ficons%2Fon_color_large.png%3Fversion%3D0?ixlib=rails-2.1.3&w=240&h=240&auto=compress&s=07c1117d9e046c1a26150728429d62db" /></span></div>
          <div className="hexagon hex6"><span><img id="handlebars" src="http://handlebarsjs.com/images/handlebars_logo.png" /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex2"><span><img id="npm" src="https://www.npmjs.org/static/npm.png" /></span></div>
          <div className="hexagon hex3"><span><img id="bootstrap" src="http://www.unixstickers.com/image/data/stickers/bootstrap/bootstrap.sh.png" /></span></div>
          <div className="hexagon hex4"><span><img id="sublime" src="https://upload.wikimedia.org/wikipedia/en/4/4c/Sublime_Text_Logo.png" /></span></div>
          <div className="hexagon hex5"><span><img id="illustrator" src="data:image/png;base64,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" /></span></div>
          <div className="hexagon hex6"><span><img id="codepen" src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex3"><span><img id="trello" src="http://logos-download.com/wp-content/uploads/2016/06/Trello_logo.png" /></span></div>
          <div className="hexagon hex4"><span><img id="fiji" src="https://fiji.sc/site/logo.png" /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src="https://www.software.slb.com/-/media/common/product%20logos/petrel_logo.png" /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src="https://www.software.slb.com/-/media/common/product%20logos/pm.png?h=70&la=en&w=70" /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src="https://www.software.slb.com/-/media/common/product%20logos/techlog_logo.png?h=70&la=en&w=70" /></span></div>
        </div>
          <div className='odd-row'>
             <div className="hexagon hex3"><span></span></div>
          <div className="hexagon hex4"><span></span></div>
          <div className="hexagon hex5"><span></span></div>
          <div className="hexagon hex6"><span></span></div>
          <div className="hexagon hex7"><span></span></div>
        </div>
      </div>
    );
  }
}

export default Tech;
