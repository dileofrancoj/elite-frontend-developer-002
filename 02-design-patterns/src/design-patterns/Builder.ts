// La creación de un vendor depende de muchos microservicios 

interface RatingProps {
    stars: number
    reviews: number
}
interface Vendor {
    name: string
    deliveryFee: string // $140
    link: string // deeplink pedidosya://webview-name/.../?params
    rating?: RatingProps
    isOpen?: boolean
}

class VendorBuilder {
    public props: Vendor
    constructor() {
        this.props = {
            name: '',
            deliveryFee: '',
            link: ''
        }
    }

    withName(name: string) : VendorBuilder{
        this.props.name = name
        return this
    }

    withDeliveryFee(deliveryFee: string): VendorBuilder {
        this.props.deliveryFee = deliveryFee
        return this
    }
    withRating(rating: RatingProps): VendorBuilder {
        this.props.rating = rating
        return this
    }
}

const carrefour = new VendorBuilder().withRating({stars: 4, reviews:100}).withName('Carrefour').withDeliveryFee('$140')

/*
    const basicVendorInfo = fetch('micro1')
    const ratingInfo = fetch('micro2')
    const vendor = new VendorBuilder()
    vendor.withRating(ratingInfo)
*/

/*
    Publica un producto --> COLA DE MENSAJES --> SQL <-- VINCENT <-- BFF (backend for fronted) (builder) <-- FRONTEND
*/