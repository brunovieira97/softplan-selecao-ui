import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css'],
})
export class PessoaPesquisaComponent implements OnInit, OnDestroy {
  public pessoas: Array<Pessoa> = new Array<Pessoa>();

  public tableColumns = ['id', 'nome', 'cpf', 'actions'];

  constructor(private pessoaService: PessoaService) {}

  public ngOnInit(): void {
    this.findPessoas();
  }

  public ngOnDestroy(): void {}

  private findPessoas(): void {
    this.pessoaService.findAll().subscribe((res) => {
      this.pessoas = res;
      console.log(this.pessoas[0].id);
    });
  }
}
