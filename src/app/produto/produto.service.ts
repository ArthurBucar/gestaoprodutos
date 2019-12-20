import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    obterTodos(): Produto[] {
        return PRODUCTS;
    }

    obterPorId(id: number): Produto {
        const produto = PRODUCTS.find(produtoRetorno => produtoRetorno.id === id);

        return produto;
    }

    salvar(produto: Produto): void {
        if (produto.id) {
           const index = PRODUCTS.findIndex(produtoRetorno => produtoRetorno.id === produto.id);
           PRODUCTS[index] = produto;
        } else {
            const id = PRODUCTS ? Math.max.apply(null, PRODUCTS.map(produtoRetorno => produtoRetorno.id)) + 1 : 1;
            produto.id = id;
            PRODUCTS.push(produto);
        }
    }
}
const PRODUCTS: Produto[] = [
    {
        'id': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Leaf rake with 48-inch wooden handle',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': '/assets/images/Anonymous_Leaf_Rake.png',
        'tags': ['rake', 'leaf', 'yard', 'home']
    },
    {
        'id': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': '/assets/images/garden_cart.png'
    },
    {
        'id': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': '/assets/images/rejon_Hammer.png',
        'tags': ['tools', 'hammer', 'construction']
    },
    {
        'id': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': '/assets/images/egore911_saw.png'
    },
    {
        'id': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': '/assets/images/xbox-controller_01.png'
    }
];
