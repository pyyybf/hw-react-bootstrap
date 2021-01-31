import React from 'react'
import '../styles/media.css'

class MediaItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="media-item">
                <div className="media-left media-top">
                    <img src={this.props.data.avatar} className="media-object" style={{'width': '80px'}}/>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.data.title}</h4>
                    <p>{this.props.data.text}</p>
                </div>
                <hr/>
            </div>
        );
    }
}

class Media extends React.Component {
    constructor() {
        super();
    }

    render() {
        const data = [
            {
                avatar: "https://s3.ax1x.com/2021/02/01/yVNrcR.jpg",
                title: "Title",
                text: "头顶的吊扇吱呀作响，桌上杂七杂八地堆着崭新的教科书，散发出书页纸好闻的油墨香。学生时代的时光似乎总是这样，漫长的总也过不完，却也稍纵即逝。彼时的花少北显然没心情做出一番这样的感慨，这会儿他刚刚跑进新班，顺手擦了一下脖子上的薄汗，上手整理起新书。"
            },
            {
                avatar: "https://s3.ax1x.com/2021/02/01/yVND39.jpg",
                title: "test",
                text: "云海仙门下雪了，下得还挺大。一大早屋檐上，树梢上，地面上都覆盖着一层厚厚的积雪。"
            },
            {
                avatar: "https://s3.ax1x.com/2021/02/01/yVNsj1.jpg",
                title: "test",
                text: "在冬日温暖的房间里，哪里也不去的时候，安静的看看周围平时陪伴自己的这些物件，仔细一想发现面对显示器的时间实在是太多，显示器就是现在的我们通往世界的窗口，于是给自己的好朋友明基SW240显示器拍了几张照片，黑夜中，虽然屏幕冰冷，但是屏幕里面的风景依然很美，2020已经走过，那些时光好也好，坏也好，都是属于你的2020。"
            },
            {
                avatar: "https://s3.ax1x.com/2021/02/01/yVNrcR.jpg",
                title: "破晓",
                text: "人烟稀少的阿拉斯加，一只小船足以打破清晨的宁静。"
            },
            {
                avatar: "https://s3.ax1x.com/2021/02/01/yVNsj1.jpg",
                title: "小时光",
                text: "#小食光#小时候印象很深的一个成语就是望梅止渴，我相信这不是一个贬义词。我们永远在眺望我们觉得最珍贵的事物，我们信任自己眺望的一切。今日份早餐：奶油奶茶、黑椒太阳蛋、煎培根。@生活颜究所 "
            }
        ];
        const mediaItems = data.map((mediaItem) =>
            <MediaItem data={mediaItem}/>
        );
        return (
            <div>
                {mediaItems}
            </div>
        );
    }
}

export default Media