---
title: Evaluation CLI
---
## Usage

```bash
swcli job [OPTIONS] COMMAND [ARGS]...
```

## Summary

- Commands for the job lifecycle management.
- For standalone instances, the `job` command can create, list, info, and compare evaluation jobs. All jobs meta are stored in the local disk.
- For cloud instances, the `job` command manages the remote cloud jobs through HTTP API.
- **Job URI** in format: `[<Project URI>/job]<job id>`.

## All Sub-Commands

  |Command|Standalone|Cloud|
  |-------|----------|-----|
  |create|Y|Y|
  |compare|Y|N|
  |info|Y|Y|
  |list|Y|Y|
  |remove|Y|Y|
  |recover|Y|Y|
  |pause|Y|Y|
  |cancel|Y|Y|
  |resume|Y|Y|

## Create a job

```bash
swcli job create [OPTIONS] [PROJECT]
```

- This command creates an evaluation job that will run the pipeline and comparison with a model and one or more datasets in the specified runtime.
- For standalone instances, the `create` command supports two running fundamentals: docker and host environment.
- The `PROJECT` argument uses the `Project URI` format. If omitted, the selected project is the default.
- In standalone instances, setting the `--use-docker` option will restore the runtime environment to run the evaluation job in the Starwhale Docker Image. It is consistent with the way of cloud instances.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--model`||Y|String||Model URI or model.yaml dir path|
    |`--dataset`||Y|String||Dataset URI, one or more datasets|
    |`--runtime`||N|String||Runtime URI. If you set `--use-docker`, the option is required.|
    |`--name`||N|String|""|evaluation job name|
    |`--desc`||N|String|""|evaluation job description|
    |`--resource`||N|String|`cpu:1`|In cloud instance, the cpu or gpu resource will be allocated to the tasks of the job. Every task can use user specified resource. Resource format is [resource name]:[count]|
    |`--use-docker`||N|Boolean|False|Only for standalone instance, use docker environment to run evaluation job.|
    |`--gencmd`||N|Boolean|False|Only for standalone instance, only generate docker run commands.|
    |`--phase`||N|String, Option:[all, ppl]|all|Only for standalone instance, the phase of the evaluation.|

- Example:

    ```bash
    ❯ swcli job create --model . --dataset mnist/version/latest
    😹 local_fuse.json existed, skip render
    🔍 /home/liutianwei/.cache/starwhale/self/dataset/mnist/gv/gvsgemdbhazwknrtmftdgyjzoaygynq.swds/local_fuse.json
    try to import mnist.ppl:MNISTInference@....
    🗣 swcli python prefix:/home/liutianwei/anaconda3/envs/starwhale-clear, runtime env python prefix:/home/liutianwei/code/starwhale/example/mnist/venv, swcli will inject sys.path
    load mnist model, start to inference...
    👏 finish run ppl: PipelineHandler status@/home/liutianwei/.cache/starwhale/self/job/g4/g4yggzdegizggodfgeytsmzqgzvgkyq/ppl/status, log@/home/liutianwei/.cache/starwhale/self/job/g4/g4yggzdegizggodfgeytsmzqgzvgkyq/ppl/log, result@/home/liutianwei/.cache/starwhale/self/job/g4/g4yggzdegizggodfgeytsmzqgzvgkyq/ppl/result
    try to import mnist.ppl:MNISTInference@....
    🗣 swcli python prefix:/home/liutianwei/anaconda3/envs/starwhale-clear, runtime env python prefix:/home/liutianwei/code/starwhale/example/mnist/venv, swcli will inject sys.path
    load mnist model, start to inference...
    👏 finish run cmp: PipelineHandler status@/home/liutianwei/.cache/starwhale/self/job/g4/g4yggzdegizggodfgeytsmzqgzvgkyq/cmp/status, log@/home/liutianwei/.cache/starwhale/self/job/g4/g4yggzdegizggodfgeytsmzqgzvgkyq/cmp/log, result@/home/liutianwei/.cache/starwhale/self/job/g4/g4yggzdegizggodfgeytsmzqgzvgkyq/cmp/result
    7 out of 7 steps finished ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 0:00:00 0:00:05
    👏 success to create job(project id: local/project/self)
    🐦 run cmd to fetch job info: swcli job info g4yggzdegizg
    ```

## Compare jobs

```bash
swcli job compare [OPTIONS] BASE_JOB [JOB]...
```

- This command compares two or more jobs with evaluation results.
- The `BASE_JOB` argument is required in `Job URI` format.
- The `JOB` argument also uses the `Job URI` format.
- The `compare` command supports two or more jobs to compare.
- Example:

    ```bash
    swcli job compare mjsdoylegy3d mq2tmzlgha4d gzqtemzqmjrg
    ```

## Show job details

```bash
swcli job info [OPTIONS] JOB
```

- This command shows detailed information about a job.
- The `JOB` argument uses the `Job URI` format. It is required.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--page`||N|Integer|1|Page number for tasks list|
    |`--size`||N|Integer|20|Page size for tasks list|

- Example:

    ```bash
    ❯ swcli job info mjqtmntbme3d
    ```

## List jobs

```bash
swcli job list [OPTIONS]
```

- This command lists all jobs in the current project.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--project`|`-p`|N|String|Selected project|Project URI|
    |`--fullname`||N|Boolean|False|Show fullname of job version|
    |`--show-removed`||N|Boolean|False|Show removed jobs|
    |`--page`||N|Integer|1|Page number for jobs list|
    |`--size`||N|Integer|20|Page size for jobs list|

## Remove a job

```bash
swcli job remove [OPTIONS] JOB
```

- This command removes a job.
- The `JOB` argument uses the `Job URI` format. The short version is accepted here.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--force`|`-f`|N|Boolean|False|Force to remove|

- Example:

    ```bash
    ❯ swcli job remove gnstazjqgjtd
    continue to remove? [y/N]: y
    👏 do successfully
    ```

## Recover a job

```bash
swcli job recover [OPTIONS] JOB
```

- This command recovers a removed job. You can run `swcli job list --show-removed` command to list all removed jobs.
- The `JOB` argument uses the `Job URI` format. It is required. The job version must be in the full version format.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--force`|`-f`|N|Boolean|False|Force to recover|

- Example:

    ```bash
    ❯ swcli job recover gnstazjqgjtdemtegbsweobwonvdkoi
    👏 do successfully
    ```

## Pause a job

- This command pauses a running job.
- The `JOB` argument uses the `Job URI` format. It is required.
- The `pause` command supports the short version format.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--force`|`-f`|N|Boolean|False|Force to pause|

## Resume a job

- This command resumes a paused job.
- The `JOB` argument uses the `Job URI` format. It is required.
- The `resume` command supports the short version format.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--force`|`-f`|N|Boolean|False|Force to resume|

## Cancel a job

- This command cancels a running/paused job.
- The `JOB` argument uses the `Job URI` format. It is required.
- The `cancel` command supports the short version format.
- Options:

    |Option|Alias Option|Required|Type|Default|Description|
    |------|--------|-------|-----------|-----|-----------|
    |`--force`|`-f`|N|Boolean|False|Force to cancel|
