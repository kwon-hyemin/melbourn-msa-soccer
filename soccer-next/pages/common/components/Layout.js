import style from "common/style/Layout.module.css";
import Nav from "./Nav";
export default function Layout({ children }){
  return(
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
    </>
  )
}