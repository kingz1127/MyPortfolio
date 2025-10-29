import styles from "./Portfolio.module.css";
export default function Portfolio(){
    return<>
    <div className={styles.portfolio}>
        <div>
            <h2>Porfolio</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam modi odio <br />
                aiores consequatur perspiciatis. Dolor rerum incidunt debitis.
            </p>
        </div>

        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>

        <div><a href="">more project</a></div>

    </div>
    </>
}