import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

// 3. nest g service cats

// service adalah sekumpulan fungsi - fungsi untuk logika bisnis yang akan digunakan di controller.

@Injectable()
export class CatsService {
  private readonly cats = [
    { id: 1, name: 'Whiskers', color: 'orange' },
    { id: 2, name: 'Mittens', color: 'black' },
    { id: 3, name: 'Fluffy', color: 'white' },
    { id: 4, name: 'Shadow', color: 'gray' },
    { id: 5, name: 'Tiger', color: 'striped' },
    { id: 6, name: 'Smokey' },
    { id: 7, name: 'Cleo', color: 'calico' },
    { id: 8, name: 'Oreo', color: 'black' },
    { id: 9, name: 'Simba', color: 'golden' },
    { id: 10, name: 'Luna', color: 'white' },
  ];

  findAll(color?: string): Cat[] {
    if (color !== undefined) {
      const data = this.cats.filter((cat) => cat.color === color.toLowerCase());
      return data;
    }
    return this.cats;
  }

  findOne(id: string) {
    return this.cats.find((cat) => cat.id === +id);
  }

  create(cat: { name: string; color: string }) {
    const newUser = {
      id: Math.floor(Math.random() * 500),
      ...cat,
    };
    this.cats.push(newUser);

    return newUser;
  }

  update(id: string, catUpdate: { name?: string; color?: string }) {
    // cari cat dengan id
    const updateCat = this.cats.find((cat) => cat.id === +id);

    if (!updateCat) {
      return `cat with id : ${id} not found`;
    }

    if (catUpdate.name) {
      updateCat.name = catUpdate.name;
    }

    if (catUpdate.color) {
      updateCat.color = catUpdate.color;
    }

    return updateCat;
  }

  delete(id: string) {
    const index = this.cats.findIndex((cat) => cat.id === +id);

    if (index === -1) {
      return `Cat with id: ${id} not found`;
    }

    const deletedCat = this.cats.splice(index, 1)[0];
    return deletedCat;
  }
}
