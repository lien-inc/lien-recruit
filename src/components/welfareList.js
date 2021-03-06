import React from 'react';
import WelfareItem from './welfareItem';
import Styles from '../styles/components/welfareList.module.scss';

const WelfareList = () => {
  const contents = [
    {
      image: 'welfare01.jpg',
      title: '新入社員研修',
      body: '新入社員の方に対しては、入社前の3月に行われるオリエンテーションと合わせて、新任研修を実施しております。'
    },
    {
      image: 'welfare02.jpg',
      title: '夢・将来設計',
      body: '毎年3月に総会があり、一年間の目標や行動計画を1日かけて考える機会を設けています。'
    },
    {
      image: 'welfare03.jpg',
      title: 'リフレッシュ休暇',
      body: '友人や家族との旅行や、自分を見つめ直す時間に使うことができるリフレッシュ休暇を、年休とは別に年5日間取得可能です。'
    },
    {
      image: 'welfare04.jpg',
      title: '奨学金制度',
      body: '資格取得(国家試験)のために、仕事をしながら通信教育を受ける方に奨学金制度があります。(奨学金制度には要件があります。)'
    }
  ];
  return (
    <div className={Styles.list}>
      { contents.map((content) => {
        return (
          <WelfareItem
            image={content.image}
            title={content.title}
            body={content.body}
          />
        )
      })}
    </div>
  )
}

export default WelfareList