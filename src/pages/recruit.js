import React from 'react';
import Layout from '../components/layout';
import Headline from '../components/headline';
import Styles from '../styles/pages/recruit.module.scss';

const Recruit = () => (
  <Layout>
    <Headline title='募集要項' />
    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>保育士・デイサービス</td>
      </tr>
      <tr>
        <th>応募資格</th>
        <td>2020年3月に卒業予定であること</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>福岡県飯塚市</td>
      </tr>
      <tr>
        <th>勤務時間</th>
        <td>0:30~23:30</td>
      </tr>
      <tr>
        <th>給与</th>
        <td>月給200万円</td>
      </tr>
      <tr>
        <th>休日・休暇</th>
        <td>そんなものはない</td>
      </tr>
      <tr>
        <th>福利厚生</th>
        <td>マック永久無料</td>
      </tr>
    </table>

    <Headline title='1日の仕事の流れ' />
    <table className={Styles.timetable}>
      <tr>
        <th></th>
        <th>正社員</th>
        <th>パート</th>
      </tr>
      <tr>
        <td>8:30</td>
        <td>出勤</td>
        <td></td>
      </tr>
      <tr>
        <td>8:40</td>
        <td>送迎出発</td>
        <td></td>
      </tr>
      <tr>
        <td>10:15</td>
        <td>施設到着</td>
        <td>出勤</td>
      </tr>
      <tr>
        <td>10:30</td>
        <td>朝の会</td>
        <td>朝の会</td>
      </tr>
      <tr>
        <td>11:40</td>
        <td>昼食</td>
        <td>昼食</td>
      </tr>
      <tr>
        <td>12:00</td>
        <td>休憩</td>
        <td>休憩</td>
      </tr>
      <tr>
        <td>13:00</td>
        <td>午後の活動</td>
        <td>午後の活動</td>
      </tr>
      <tr>
        <td>14:00</td>
        <td>おやつタイム</td>
        <td>おやつタイム</td>
      </tr>
      <tr>
        <td>14:15</td>
        <td>帰り支度の援助</td>
        <td>帰り支度の援助</td>
      </tr>
      <tr>
        <td>14:30</td>
        <td>バス送り出し</td>
        <td>バス送り出し</td>
      </tr>
      <tr>
        <td>14:40</td>
        <td>掃除</td>
        <td>掃除</td>
      </tr>
      <tr>
        <td>14:50</td>
        <td>記録</td>
        <td>終礼</td>
      </tr>
      <tr>
        <td>15:00</td>
        <td>翌日の準備</td>
        <td>退社</td>
      </tr>
      <tr>
        <td>17:00</td>
        <td>終礼</td>
        <td></td>
      </tr>
      <tr>
        <td>17:30</td>
        <td>退社</td>
        <td></td>
      </tr>
    </table>


  </Layout>
)

export default Recruit