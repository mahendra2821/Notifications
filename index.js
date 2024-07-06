const Notification = props => {
  //  Write your code here.
  const {className, iconUrl, message} = props
  const containerClass = `notification-container ${className}`

  return (
    <div className={containerClass}>
      <img className='icon' src={iconUrl} />
      <p className='message'>{message}</p>
    </div>
  )
}

const element = (
  <div className='notification-app-container'>
    <h1 className='title'>Notification</h1>
    <div className='notification-list-container'>
      <Notification
        className='primary-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Information Message'
      />
      <Notification
        className='success-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        message='Succes Message'
      />
      <Notification
        className='warning-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        message='Warning Message'
      />
      <Notification
        className='danger-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        message='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
