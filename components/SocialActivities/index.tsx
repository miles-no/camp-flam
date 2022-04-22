import styles from './styles.module.css';


const ActivityTitle = ({children}: React.HTMLAttributes<HTMLLIElement>) => {
    return (
        <h3 className="text-lg font-bold dark:text-white">{children}</h3>
    )
}

const ActivityDescription = ({children}: React.HTMLAttributes<HTMLLIElement>) => {
    return null;
    /*
    Do we need this?
    return (
        <p className="text-sm font-normal dark:text-white">{children}</p>
    )
     */
}

const Participant = ({children}: React.HTMLAttributes<HTMLLIElement>) => {
    return (
        <li className="">{children}</li>
    )
}

const SocialActivities = () => {
    return (
        <div id="sosiale-aktiviteter">
            <div className={styles.container}>
                <div className={styles.activity}>
                    <ActivityTitle>RIB</ActivityTitle>
                    <ActivityDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus enim. In auctor dolor vel
                        purus mollis, nec porttitor velit varius. Ut ultrices dapibus massa, sit amet varius sapien
                        pretium a. Phasellus tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
                        neque est, maximus eu diam non, lacinia mollis libero. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Maecenas vulputate lacus eget velit molestie,
                        imperdiet porttitor massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo dapibus
                        eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur et lacinia erat.
                        Fusce ultrices risus magna, eget euismod nisl sollicitudin id.
                    </ActivityDescription>
                    <ol>
                        <Participant>Wenche</Participant>
                        <Participant>Wenche</Participant>
                    </ol>
                </div>
                <div className={styles.activity}>
                    <ActivityTitle>Badstu</ActivityTitle>
                    <ActivityDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus enim. In auctor dolor vel
                        purus mollis, nec porttitor velit varius. Ut ultrices dapibus massa, sit amet varius sapien
                        pretium a. Phasellus tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
                        neque est, maximus eu diam non, lacinia mollis libero. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Maecenas vulputate lacus eget velit molestie,
                        imperdiet porttitor massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo dapibus
                        eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur et lacinia erat.
                        Fusce ultrices risus magna, eget euismod nisl sollicitudin id.
                    </ActivityDescription>
                    <ol>
                        <Participant>Alex</Participant>
                    </ol>
                </div>
                <div className={styles.activity}>
                    <ActivityTitle>Kajakk</ActivityTitle>
                    <ActivityDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus enim. In auctor dolor vel
                        purus mollis, nec porttitor velit varius. Ut ultrices dapibus massa, sit amet varius sapien
                        pretium a. Phasellus tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
                        neque est, maximus eu diam non, lacinia mollis libero. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Maecenas vulputate lacus eget velit molestie,
                        imperdiet porttitor massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo dapibus
                        eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur et lacinia erat.
                        Fusce ultrices risus magna, eget euismod nisl sollicitudin id.
                    </ActivityDescription>
                    <ol>
                        <Participant>Ken-Thomas</Participant>
                    </ol>
                </div>
                <div className={styles.activity}>
                    <ActivityTitle>Egentid</ActivityTitle>
                    <ActivityDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus enim. In auctor dolor vel
                        purus mollis, nec porttitor velit varius. Ut ultrices dapibus massa, sit amet varius sapien
                        pretium a. Phasellus tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
                        neque est, maximus eu diam non, lacinia mollis libero. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Maecenas vulputate lacus eget velit molestie,
                        imperdiet porttitor massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo dapibus
                        eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur et lacinia erat.
                        Fusce ultrices risus magna, eget euismod nisl sollicitudin id.
                    </ActivityDescription>
                    <ol>
                        <Participant>Jan Frode</Participant>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SocialActivities