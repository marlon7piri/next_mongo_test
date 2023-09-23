import React from 'react'
import styles from  './loading.module.css'

function loading() {
  return (
    <div className='w-full h-screen m-auto  flex justify-center items-center p-8'>
      <div className={styles.loader}></div>
    </div>
  )
}

export default loading