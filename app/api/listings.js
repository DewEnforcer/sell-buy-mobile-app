import client from "./client";

const endPoint = "/listings";

export function getListings() {
   return client.get(endPoint);
}

export function submitListing(listing, onUploadProgress = null, onDone = null) {
    const data = new FormData();

    data.append("price", listing.price);
    data.append("title", listing.title);
    data.append("description", listing.description);
    data.append("categoryId", listing.category.value);
    if (listing.location) data.append("location", JSON.stringify(location));
    
    listing.images.forEach((image,k) =>{
        data.append("images", {
          name: `image${k}`,
          uri: image,
          type: "image/jpeg"
        })
      })

    return client.post(endPoint, data, {
        onUploadProgress: progress => onUploadProgress(progress.loaded/progress.total),
        onDone
    });
}

export default {
    getListings,
    submitListing
}