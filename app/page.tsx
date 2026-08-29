"use client"
import { useState } from 'react'
const DRIVE = "https://drive.google.com/drive/folders/1FgEK5b4HKaGy-sBKAOlS76lLdUU1c9sW"
export default function Home(){
  const [form, setForm] = useState({name:"", email:"", whatsapp:"", country:"Nigeria", subject:"Mathematics"})
  const [submitted, setSubmitted] = useState(false)
  const handleRegister = (e:any) => {
    e.preventDefault()
    setSubmitted(true)
    const msg = `NEW VIS ACADEMY REGISTRATION:%0AName: ${form.name}%0AEmail: ${form.email}%0AWhatsApp: ${form.whatsapp}%0ACountry: ${form.country}%0ASubject: ${form.subject}`
    window.open(`https://wa.me/2349063123828?text=${msg}`, "_blank")
  }
  return (
    <div style={{background:"#02020a", minHeight:"100vh", color:"#FFD700", fontFamily:"sans-serif", paddingBottom:"90px"}}>
      <div style={{border:"5px solid #FFD700", position:"relative", overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200" alt="Science Lab" style={{width:"100%", height:"380px", objectFit:"cover", opacity:0.4}} />
        <div style={{position:"absolute", top:0, left:0, right:0, bottom:0, background:"linear-gradient(180deg, rgba(2,2,10,0.2), #02020a)", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"20px"}}>
          <h1 style={{fontSize:"42px", letterSpacing:"3px", margin:0}}>VIS ACADEMY</h1>
          <p style={{background:"#FFD700", color:"black", padding:"6px 18px", fontWeight:"900", fontSize:"12px", marginTop:"10px", borderRadius:"20px"}}>SCIENCE & MATHS MADE EASY</p>
          <h2 style={{color:"#fff", fontSize:"16px", marginTop:"15px"}}>Welcome to Africa's #1 Online Science Academy</h2>
          <div style={{marginTop:"18px", display:"flex", gap:"10px"}}>
            <a href="#register" style={{background:"#FFD700", color:"black", padding:"12px 24px", fontWeight:"900", textDecoration:"none", borderRadius:"8px"}}>📝 REGISTER NOW</a>
            <a href="https://meet.google.com/fim-eeua-dor" target="_blank" style={{background:"#fff", color:"black", padding:"12px 24px", fontWeight:"900", textDecoration:"none", borderRadius:"8px"}}>🔴 LIVE CLASS</a>
          </div>
        </div>
      </div>
      <div style={{margin:"20px", display:"grid", gap:"15px"}}>
        <div style={{border:"5px solid #FFD700", padding:"20px", borderRadius:"12px"}}>
          <h2>👋 Welcome Message</h2>
          <p style={{color:"#fff", marginTop:"10px"}}>Welcome to <b style={{color:"gold"}}>VIS Academy Gold</b>! I am <b>Engr Sir Velocity</b>, your Science tutor. Built for students in USA, UK, Canada, Nigeria, Australia, Europe.</p>
          <div style={{display:"flex", gap:"10px", marginTop:"12px"}}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400" style={{width:"48%", height:"100px", objectFit:"cover", borderRadius:"8px", border:"2px solid gold"}} />
            <img src="https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=400" style={{width:"48%", height:"100px", objectFit:"cover", borderRadius:"8px", border:"2px solid gold"}} />
          </div>
        </div>
        <div style={{border:"5px solid #FFD700", padding:"20px", borderRadius:"12px", textAlign:"center"}}>
          <h2>🎯 Our Slogan</h2>
          <p style={{fontSize:"20px", fontWeight:"900", color:"#fff", fontStyle:"italic", marginTop:"10px"}}>"Science and Maths Made Easy - From Struggle to Success!"</p>
        </div>
        <div style={{border:"5px solid #FFD700", padding:"20px", borderRadius:"12px"}}>
          <h2>🚀 Our Mission</h2>
          <ul style={{color:"#fff", marginTop:"10px", paddingLeft:"18px"}}>
            <li>Make Maths, Physics, Chemistry, Biology simple</li>
            <li>Provide free notes/videos via Google Drive</li>
            <li>Produce 10,000+ scientists by 2030</li>
          </ul>
        </div>
      </div>
      <div id="register" style={{margin:"20px", border:"5px solid #FFD700", padding:"20px", borderRadius:"12px", background:"#111"}}>
        <h2 style={{textAlign:"center"}}>📝 Student Registration Form</h2>
        {!submitted ? (
          <form onSubmit={handleRegister} style={{display:"grid", gap:"12px", maxWidth:"500px", margin:"15px auto 0"}}>
            <input required placeholder="Full Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{padding:"12px", borderRadius:"8px", border:"2px solid gold", background:"#000", color:"#fff"}} />
            <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} style={{padding:"12px", borderRadius:"8px", border:"2px solid gold", background:"#000", color:"#fff"}} />
            <input required placeholder="WhatsApp Number" value={form.whatsapp} onChange={e=>setForm({...form, whatsapp:e.target.value})} style={{padding:"12px", borderRadius:"8px", border:"2px solid gold", background:"#000", color:"#fff"}} />
            <select value={form.country} onChange={e=>setForm({...form, country:e.target.value})} style={{padding:"12px", borderRadius:"8px", border:"2px solid gold", background:"#000", color:"#fff"}}>
              <option>Nigeria</option><option>USA</option><option>UK</option><option>Canada</option><option>Australia</option><option>Europe</option>
            </select>
            <select value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} style={{padding:"12px", borderRadius:"8px", border:"2px solid gold", background:"#000", color:"#fff"}}>
              <option>Mathematics</option><option>Physics</option><option>Chemistry</option><option>Biology</option><option>All 4 Subjects</option>
            </select>
            <button type="submit" style={{background:"#FFD700", color:"black", padding:"14px", fontWeight:"900", borderRadius:"8px", border:"none"}}>✅ REGISTER & JOIN WHATSAPP</button>
          </form>
        ) : (
          <div style={{textAlign:"center", padding:"20px", background:"#000", border:"3px solid gold", borderRadius:"10px", marginTop:"15px"}}>
            <h3 style={{color:"#fff"}}>🎉 Welcome {form.name}!</h3>
            <div style={{marginTop:"15px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px"}}>
              <a href={DRIVE} target="_blank" style={{background:"gold", color:"black", padding:"12px", fontWeight:"900", textDecoration:"none", borderRadius:"8px"}}>📁 Open Drive</a>
              <a href="https://chat.whatsapp.com/Dw3CxBWDUpZ9cxyVZkRYTI" target="_blank" style={{background:"#25D366", color:"white", padding:"12px", fontWeight:"900", textDecoration:"none", borderRadius:"8px"}}>💬 Join Group</a>
            </div>
          </div>
        )}
      </div>
      <div style={{margin:"20px", border:"5px solid #FFD700", padding:"20px", borderRadius:"12px"}}>
        <h2 style={{textAlign:"center"}}>📚 LEARNING CENTER</h2>
        {[
          {title:"Mathematics", img:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400"},
          {title:"Physics", img:"https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400"},
          {title:"Chemistry", img:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400"},
          {title:"Biology", img:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400"},
        ].map(sub=>(
          <div key={sub.title} style={{border:"4px solid gold", margin:"18px 0", background:"#111", borderRadius:"12px", overflow:"hidden"}}>
            <img src={sub.img} alt={sub.title} style={{width:"100%", height:"120px", objectFit:"cover"}} />
            <div style={{padding:"16px"}}>
              <h3>{sub.title}</h3>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginTop:"10px"}}>
                <a href={DRIVE} target="_blank" style={{background:"gold", color:"black", padding:"11px", textAlign:"center", fontWeight:"900", borderRadius:"8px", textDecoration:"none"}}>📄 Notes</a>
                <a href={DRIVE} target="_blank" style={{background:"gold", color:"black", padding:"11px", textAlign:"center", fontWeight:"900", borderRadius:"8px", textDecoration:"none"}}>🎥 Videos</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{border:"5px solid gold", margin:"20px", padding:"20px", borderRadius:"12px", textAlign:"center"}}>
        <h2>📞 Contact Us</h2>
        <p style={{color:"#fff", marginTop:"10px"}}>Email: scienceandmathsmadeeasy@gmail.com</p>
        <p style={{color:"#fff"}}>USA: +14022513055 | NG: +2349063123828</p>
        <p style={{color:"#fff"}}>Drive: <a href={DRIVE} style={{color:"gold"}}>Open Folder</a></p>
      </div>
      <div style={{position:"fixed", bottom:0, left:0, right:0, display:"flex", gap:"5px", padding:"10px", background:"black", borderTop:"5px solid gold"}}>
        <a href="#register" style={{flex:1, background:"gold", color:"black", padding:"14px", textAlign:"center", fontWeight:"900", textDecoration:"none", borderRadius:"6px"}}>REGISTER</a>
        <a href={DRIVE} style={{flex:1, background:"white", color:"black", padding:"14px", textAlign:"center", fontWeight:"900", textDecoration:"none", borderRadius:"6px"}}>DRIVE</a>
        <a href="https://chat.whatsapp.com/Dw3CxBWDUpZ9cxyVZkRYTI" style={{flex:1, background:"#25D366", color:"white", padding:"14px", textAlign:"center", fontWeight:"900", textDecoration:"none", borderRadius:"6px"}}>WHATSAPP</a>
      </div>
    </div>
  )
}
