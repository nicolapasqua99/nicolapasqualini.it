{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.corepack
  ];
  idx.extensions = [
    "github.vscode-github-actions"
    "pr1sm8.theme-panda"
  ];
  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        id = "web";
        manager = "web";
      }
    ];
  };
}
