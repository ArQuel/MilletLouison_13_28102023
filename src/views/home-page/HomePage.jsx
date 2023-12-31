import { FeatureItem, HeroItem } from '../../components';
import { FEATURES_CARDS_CONTENT, HEROS_ITEMS_CONTENT } from '../../datas/data';
import styles from './HomePage.module.scss';

/**
 * @name HomePage
 * @description This is view will render the home page.
 * @returns {JSX.Element}
 */

const HomePage = () => {
    return (
        <main className={styles.home_page_container}>
            <div className={styles.hero}>
                <section className={styles.hero_content}>
                    <h2 className="sr-only">Promoted Content</h2>
                    {HEROS_ITEMS_CONTENT.map((item) => {
                        return <HeroItem key={item.id} heroContent={item} />;
                    })}
                    <p className={styles.text}>
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className={styles.features_container}>
                <h2 className="sr-only">Features</h2>
                {FEATURES_CARDS_CONTENT.map((item) => {
                    return <FeatureItem key={item.id} featureContent={item} />;
                })}
            </section>
        </main>
    );
};

export default HomePage;
