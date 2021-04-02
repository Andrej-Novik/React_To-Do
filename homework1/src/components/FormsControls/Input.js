import styles from "./styles.module.scss"

const Input = ({ input, meta, ...props }) => {
	const showError = meta.touched && meta.error
	return (
		<div className={styles.formControl + " " + (showError ? styles.error : "")}>
			<input {...input} {...props} />
			<br />
			{ showError && <span>{meta.error}</span>}
		</div>
	)
}

export default Input