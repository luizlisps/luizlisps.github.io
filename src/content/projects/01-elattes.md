---
title: Modernização da plataforma e do pipeline analítico eLattes
organization: FAPDF
period: 09/2025 - atual
bullets:
  - >-
    Conduzo a migração do pipeline analítico legado em R para um core em Rust e um worker separado, com fila persistida no PostgreSQL. O projeto já conta com previsão de implantação no setor público.
  - >-
    Desenvolvi o `elattes-core` para processar currículos Lattes XML/ZIP, extrair publicações, orientações e patentes, deduplicar trabalhos entre pesquisadores por distância de Levenshtein e gerar relações em grafos. O `elattes-worker`, em Rust/Tokio, implementa idempotência, leases, recuperação de jobs, retries e dead letter; benchmarks da migração registraram aceleração acumulada de 30× de R para Rust.
---
