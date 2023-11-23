import Link from "next/link"

import styles from './ticket-banner.module.scss'

function TicketBanner() {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <p>
                    Welcome to JSConfBP 2024!
                    <br />
                    Join us for a celebration of innovation, inspiration, and inclusive community.
                </p>
            </div>
            <Link href="https://ti.to/jsconf-bp/jsconf-budapest-2024" target='_blank' className={styles.button}>
                Tickets
            </Link>
        </div>

    )
}

export default TicketBanner