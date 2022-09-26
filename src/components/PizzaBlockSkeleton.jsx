import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="130" r="130" />
        <rect x="0" y="318" rx="10" ry="10" width="280" height="89" />
        <rect x="0" y="435" rx="10" ry="10" width="105" height="27" />
        <rect x="0" y="274" rx="10" ry="10" width="280" height="30" />
        <rect x="170" y="425" rx="30" ry="30" width="110" height="46" />
    </ContentLoader>
)

export default Skeleton;