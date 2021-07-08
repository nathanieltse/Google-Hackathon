import './NotificationPage.scss'

const NotificationPage = () => {
    
    return (
        <section className="NotificationPage">
            <article className="NotificationPage__main-card">
                <h2 className="NotificationPage__main-card-header">Danger!</h2>
                <p className="NotificationPage__main-card-text">Your data is compromised as of July, 08 2021 2:56pm EST. It looks like Facebook Compant is having issues securing your personal information. <span className="NotificationPage__main-card-subtext">You've done nothing wrong, but we want to help you secure the following:</span></p>
                <h3 className="NotificationPage__main-card-subheader">Email Account</h3>
                <h3 className="NotificationPage__main-card-subheader">Mobile Phone Number</h3>
                <h3 className="NotificationPage__main-card-subheader">Home Address</h3>

                <p className="NotificationPage__main-card-question">Would you like to learn how to see a few east steps as to how to fix this?</p>
                <div className="NotificationPage__main-card-button-wrapper">
                <button className="NotificationPage__main-card-button">Not Right Now</button>
                <button className="NotificationPage__main-card-button NotificationPage__main-card-cta">Yes</button>
                </div>
            </article>
        </section>
    )
}

export default NotificationPage