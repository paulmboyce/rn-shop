import { Image } from "react-native";
import { loadAsync as loadFontsAsync } from "expo-font";
import PRODUCT_DATA from "../data/products";

const fetchAssetsAsync = () => {
	return Promise.all([fetchFonts(), ...fetchOnlineImages()]);
};

const fetchFonts = () => {
	console.log("Fetching fonts...");
	return loadFontsAsync({
		OpenSans: require("../../assets/fonts/OpenSans-Regular.ttf"),
		OpenSansBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
	});
};

const fetchOnlineImages = () => {
	console.log("Pre-loading images...");
	const imageUrls = PRODUCT_DATA.map((product) => product.image);
	return imageUrls.map(async (url) => {
		console.log("--> ", url);
		return await Image.prefetch(url);
	});
};

export { fetchAssetsAsync };
