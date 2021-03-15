import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../model/pessoa.model';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css'],
})
export class PessoaPesquisaComponent implements OnInit {
  public pessoas: Array<Pessoa> = new Array<Pessoa>();
  public tableColumns = ['id', 'nome', 'cpf', 'actions'];

  constructor(private router: Router, private pessoaService: PessoaService) {}

  public ngOnInit(): void {
    this.findPessoas();
  }

  public include(): void {
    this.router.navigate(['/pessoas/new']);
  }

  public edit(id: number): void {
    this.router.navigate([`/pessoas/${id}`]);
  }

  public delete(id: number): void {
    this.pessoaService.findById(id).subscribe((pessoa) => {
      this.pessoaService.delete(pessoa).subscribe(() => {
        this.findPessoas();
      });
    });
  }

  private findPessoas(): void {
    this.pessoaService.findAll().subscribe((res) => {
      this.pessoas = res;
    });
  }
}
