import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", borderRadius : 0 }}>
      <br-x />
      <br-xx/>
      <br-xx/>

      <Window title={"قیمت لحظه ای تتر:"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 10px)" }}>
      <br-xx/>

       <div style={{width:"100%" , height:50 , backgroundColor:"#5871FF" , borderRadius:0 , 
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        
        قیمت لحظه ای:{(props.p.price as number).toLocaleString("fa-IR")}
       </div>

       <br-xx/>
       
       

       <div style={{width:"100%" , height:50 , backgroundColor:"#5871FF" , borderRadius:0 , 
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        تغییرات در ۲۴ ساعت گذشته: ٪ {(Number(props.p.diff24d) as number).toLocaleString("fa-IR")} 
       </div>

              <br-xx/>
       

       <div style={{width:"100%" , height:50 , backgroundColor:"#5871FF" , borderRadius:0 , 
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        تغییرات در ۷ روز گذشته: ٪ {(Number(props.p.diff7d) as number).toLocaleString("fa-IR")} 
       </div>


       <br-xx/>
       

       <div style={{width:"100%" , height:50 , backgroundColor:"#5871FF" , borderRadius:0 , 
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
       تغییرات در ۱ ماه گذشته: ٪ {(Number(props.p.diff30d) as number).toLocaleString("fa-IR")} 
       </div>
       <br-xx/>
        
        <center style={{fontSize:11}}>
          تهیه شده توسط تیم پژوهشی ۱۲۷
        </center>
       <br-xx/>
         

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {

  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = (await fetch("https://api.tetherland.com/currencies"))
    let data = await res.json()
    let p = data.data.currencies.USDT
    console.log("PRICEEEE:", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}