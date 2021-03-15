import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateValidators } from 'src/app/shared/validators/date.validator';
import { DocumentoValidators } from 'src/app/shared/validators/documento.validator';
import { Pessoa } from '../model/pessoa.model';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-manutencao',
  templateUrl: './pessoa-manutencao.component.html',
  styleUrls: ['./pessoa-manutencao.component.css'],
})
export class PessoaManutencaoComponent implements OnInit {
  public pessoa!: Pessoa;
  private id!: number;

  public formGroup: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    sexo: new FormControl(''),
    email: new FormControl('', Validators.email),
    dataNascimento: new FormControl('', [
      Validators.required,
      DateValidators.past,
    ]),
    naturalidade: new FormControl(''),
    nacionalidade: new FormControl(''),
    cpf: new FormControl('', DocumentoValidators.cpf),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      if (this.id) {
        this.findPessoa(this.id);
      } else {
        this.pessoa = {};
      }
    });
  }

  public goToListPage(): void {
    this.router.navigate(['/pessoas']);
  }

  public save(): void {
    this.pessoa = { ...this.pessoa, ...this.formGroup.value };

    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  private findPessoa(id: number): void {
    this.pessoaService.findById(id).subscribe((response) => {
      this.pessoa = response;
      this.loadFormData();
    });
  }

  private create(): void {
    this.pessoaService.create(this.pessoa).subscribe((pessoa) => {
      this.router.navigate([`/pessoas/${pessoa.id}`]);
    });
  }

  private update(): void {
    this.pessoaService.update(this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoas']);
    });
  }

  private loadFormData(): void {
    const {
      nome,
      sexo,
      email,
      dataNascimento,
      naturalidade,
      nacionalidade,
      cpf,
    } = this.pessoa;

    this.formGroup.patchValue({
      nome: nome || '',
      sexo: sexo || '',
      email: email || '',
      dataNascimento: dataNascimento || new Date(),
      naturalidade: naturalidade || '',
      nacionalidade: nacionalidade || '',
      cpf: cpf || '',
    });
  }
}
