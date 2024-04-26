 import {useState, useEffect } from "react"




export default function SettingsPanel(){
const[settings,setSettings]=useState({
    Darkmode:localStorage.getItem('darkMode') === 'true',
    notifications:localStorage.getItem('notifications') === 'true',
     fontSize: Math.max(parseInt(localStorage.getItem('fontSize')) || 16, 1)
})

useEffect(()=>{
    localStorage.setItem('DarkMode',settings.DarkMode)
    localStorage.setItem('notifications',settings.notifications)
    localStorage.setItem('fontSize',settings.fontSize)
},[settings])



const handleChange=(key,value)=>{
    setSettings({...settings,[key]:value})
}

    return(<div>
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>settings panel</h1>
            <div>
            <label style={{ marginRight: '10px' }}>
                <input
                type="checkbox"
                checked={settings.DarkMode}
                onChange={(e)=>handleChange('darkmode',e.target.checked)}/>
                Dark Mode
            </label>
            </div>
            <div>
            <label style={{ marginRight: '10px' }}>
                <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e)=>handleChange('notifications',e.target.checked)}/>
                notifications
            </label>
            </div>
            <div>
            <label style={{ marginRight: '10px' }}>
                <input
                type="number"
                value={settings.fontSize}
                onChange={(e)=>handleChange('fontSize',parseInt(e.target.value))}
                style={{ marginLeft: '5px', width: '50px' }}
                />
                Font Size
            </label>
            </div>
        </div>
        </div>
    )
}