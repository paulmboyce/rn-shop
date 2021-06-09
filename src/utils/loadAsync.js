import { Image } from "react-native";
import { loadAsync as loadFontsAsync } from "expo-font";
import PRODUCT_DATA from "../data/products";
import loadInitialProductsToStoreAsync from "./InitialProductsStoreLoader";
const fetchAssetsAsync = () => {
	//return fetchFonts();
	//	return Promise.all([fetchFonts(), ...fetchOnlineImages()]);
	return Promise.all([fetchFonts(), ...loadInitialProductsToStoreAsync()]);
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
	return imageUrls.map((url) => {
		console.log("--> ", url);
		return Image.prefetch(url);
	});
};

export { fetchAssetsAsync };
